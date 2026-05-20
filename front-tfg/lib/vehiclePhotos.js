const PHOTO_PREFIX = 'vehicle_photo:';

export function getVehiclePhotoKey(vehicle) {
    const key = vehicle?.id || vehicle?.matricula;
    return key ? `${PHOTO_PREFIX}${key}` : null;
}

export function getVehiclePhoto(vehicle) {
    if (typeof window === 'undefined') return null;
    const idKey = vehicle?.id ? `${PHOTO_PREFIX}${vehicle.id}` : null;
    const plateKey = vehicle?.matricula ? `${PHOTO_PREFIX}${vehicle.matricula}` : null;
    return (idKey && localStorage.getItem(idKey)) || (plateKey && localStorage.getItem(plateKey)) || null;
}

export function saveVehiclePhoto(vehicle, photo) {
    if (typeof window === 'undefined' || !photo) return;
    const key = getVehiclePhotoKey(vehicle);
    if (key) localStorage.setItem(key, photo);
}

export function readImageFile(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve(null);
            return;
        }

        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
