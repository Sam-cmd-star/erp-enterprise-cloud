import { Routes, Route, Navigate } from 'react-router-dom';
import { ruta } from '../../../core/config/navigation';
import { CajaPage } from './CajaPage';
import { BancosPage } from './BancosPage';

export const TesoreriaPage: React.FC = () => (
  <div className="max-w-6xl space-y-6">
    <Routes>
      <Route index element={<Navigate to={ruta('tesoreria', 'caja')} replace />} />
      <Route path="caja" element={<CajaPage />} />
      <Route path="bancos" element={<BancosPage />} />
      <Route path="*" element={<Navigate to={ruta('tesoreria', 'caja')} replace />} />
    </Routes>
  </div>
);
