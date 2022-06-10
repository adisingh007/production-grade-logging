import { Logger } from "winston";

import { youtubeLogger } from "./youtubeLogger";
import { productionLogger } from "./productionLogger";

export let logger: Logger = youtubeLogger();

if (process.env.NODE_ENV === "production") {
    logger = productionLogger();
}

