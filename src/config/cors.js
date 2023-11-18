import "dotenv/config";
import cors from "cors";

const configCors = (app) => {
  // use middleware cors
  app.use(cors({
    origin: [process.env.REACT_CLIENT_URL, process.env.REACT_ADMIN_URL],
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    credentials: true,
    allowedHeaders: "X-Requested-With,content-type",
  }));

  // console.log("REACT_CLIENT_URL:", process.env.REACT_CLIENT_URL);
  // console.log("REACT_ADMIN_URL:", process.env.REACT_ADMIN_URL);
};

export default configCors;
