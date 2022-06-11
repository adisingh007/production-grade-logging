import { Logger } from "winston";

import { localLogger } from "./localLogger";
import { productionLogger } from "./productionLogger";

export let logger: Logger = localLogger();

if (process.env.NODE_ENV === "production") {
    logger = productionLogger();
}

