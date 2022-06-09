import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  "transform": {
    "\\.jsx?$": "babel-jest",
    "\\.tsx?$": "ts-jest",
  }
}

export default config;
