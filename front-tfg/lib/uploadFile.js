'use client';

export async function uploadFile(file, folder = 'documents') {
    if (!file) return null;

    const data = new FormData();
    data.append('file', file);
    data.append('folder', folder);

    const response = await fetch('/api/uploads', {
        method: 'POST',
        body: data,
    });

    const body = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(body.message || 'No se pudo subir el archivo.');
    }

    return body;
}
