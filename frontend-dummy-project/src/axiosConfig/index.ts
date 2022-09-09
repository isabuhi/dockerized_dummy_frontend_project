import axios from "axios"


// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{ axios.interceptors.request.use(
    (config:any) => {
      const accessToken = "$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW";
      if (accessToken) {
        config.headers["X-ACCESS-KEY"] = accessToken;
      }
      return config;
    },
    (error) => Promise.reject(error)
);
}