import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'PAC API',
        version: '1.0.0',
      },
      tags: [
        {
          name: 'PAC',
          description: 'PAC',
        },
      ],
    },
    apis: ['./src/swagger/*.ts']
  };
  

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/users', userRoutes);

// Run migrations and start server
(async () => {
 // await umzug.up();
 // await sequelize.sync();
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
})();
