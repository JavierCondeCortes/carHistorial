'use client';

import { useCallback, useEffect, useState } from 'react';
import { createVehicle, deleteVehicle, fetchVehicles, updateVehicle } from '@/lib/api/vehicles';

export function useVehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadVehicles = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            setVehicles(await fetchVehicles());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadVehicles();
    }, [loadVehicles]);

    const addVehicle = useCallback(async (payload) => {
        await createVehicle(payload);
        await loadVehicles();
    }, [loadVehicles]);

    const editVehicle = useCallback(async (payload) => {
        await updateVehicle(payload);
        await loadVehicles();
    }, [loadVehicles]);

    const removeVehicle = useCallback(async (id) => {
        await deleteVehicle(id);
        setVehicles((current) => current.filter((vehicle) => Number(vehicle.id) !== Number(id)));
    }, []);

    return { vehicles, loading, error, loadVehicles, addVehicle, editVehicle, removeVehicle };
}
