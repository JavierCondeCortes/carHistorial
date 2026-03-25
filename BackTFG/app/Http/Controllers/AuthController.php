<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validamos los datos que vienen de React
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ], [
            // AQUÍ PERSONALIZAS TUS MENSAJES
            'name.required' => '¡Oye! Necesitamos saber tu nombre .',
            'email.required' => 'El correo electrónico es obligatorio.',
            'email.email' => 'Ese formato de correo no parece válido.',
            'email.unique' => 'Este correo ya está registrado, ¡prueba a iniciar sesión!',
            'password.min' => 'La seguridad es lo primero: la contraseña debe tener al menos 8 caracteres.',
        ]);

        if ($validator->fails()) {
            // IMPORTANTE: Envolvemos en la clave 'errors' para el JSX
            return response()->json([
                'status' => 'error',
                'message' => 'Revisa los campos del formulario.',
                'errors' => $validator->errors()
            ], 400);
        }

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // 2. Creamos el usuario en la DB de Docker
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Cifrado esencial
        ]);

        // 3. Generamos el Token de acceso de una vez
        $token = $user->createToken('auth_token')->plainTextToken;

        // 4. Respondemos a React con el token
        return response()->json([
            'message' => 'Usuario creado exitosamente',
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 201);
    }

    public function login(Request $request)
    {
        // 1. Validamos que el usuario envíe los campos necesarios
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Buscamos al usuario en la base de datos de Docker
        $user = User::where('email', $request->email)->first();

        // 3. Verificamos: ¿Existe el usuario? ¿La contraseña coincide con el hash?
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Las credenciales proporcionadas son incorrectas.'
            ], 401);
        }

        // 4. Si es correcto, generamos el Token (gracias al HasApiTokens que pusimos antes)
        $token = $user->createToken('auth_token')->plainTextToken;

        // 5. Devolvemos el token a React
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user // Opcional: para que React sepa quién se logueó
        ]);
    }

    // app/Http/Controllers/UserController.php (o AuthController)

    public function update(Request $request, $id)
    {
        // 1. Buscamos el registro en la DB
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        // 2. Validamos los nuevos datos
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|unique:users,email,' . $id, // Permite el mismo email del usuario actual
        ]);

        // 3. Actualizamos los campos
        // Usamos fill para llenar solo los campos que vengan en la petición
        $user->fill($request->only(['name', 'email']));

        // Si envían una contraseña nueva, la ciframos antes de guardarla
        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return response()->json([
            'message' => 'Datos actualizados en CarHisDB',
            'user' => $user
        ]);
    }
    // app/Http/Controllers/AuthController.php o UserController.php

    public function destroy($id)
    {
        // 1. Buscamos al usuario o registro por su ID
        $user = User::find($id);

        // 2. Si no existe, devolvemos un error 404
        if (!$user) {
            return response()->json([
                'message' => 'El registro no existe en la base de datos.'
            ], 404);
        }

        // 3. Eliminamos el registro
        $user->delete();

        // 4. Respuesta de confirmación
        return response()->json([
            'message' => 'Usuario eliminado correctamente.'
        ]);
    }
}