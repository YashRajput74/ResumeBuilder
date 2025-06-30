import { createContext, useContext, useEffect, useState } from 'react';
import templateStyles from '../data/templateStyles';

export const ResumeContext = createContext();

export function ResumeProvider({ children, initialData, templateId, onDataChange }) {
    const [data, setData] = useState(initialData);

    const updateField = (section, fieldPath, value) => {
        setData(prev => {
            const updated = structuredClone(prev);
            let target = updated[section];
            const parts = fieldPath.split('.');
            for (let i = 0; i < parts.length - 1; i++) {
                target = target[parts[i]];
            }
            target[parts.at(-1)] = value;
            return updated;
        });
    };

    useEffect(() => {
        onDataChange?.(data);
    }, [data]);

    return (
        <ResumeContext.Provider value={{
            data,
            updateField,
            style: templateStyles[templateId] || {}
        }}>
            {children}
        </ResumeContext.Provider>
    );
}

export const useResume = () => useContext(ResumeContext);
