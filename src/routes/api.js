import loginRegisterRoutes from './loginRegister';
import hotelRoutes from './hotel';
import roomRoutes from './room'

const initAPIRoutes = (app) => {
  app.use('/api/v1/room', roomRoutes);

  app.use('/api/v1/hotel', hotelRoutes);

  app.use('/api/v1', loginRegisterRoutes);

  return app;
};

export default initAPIRoutes;