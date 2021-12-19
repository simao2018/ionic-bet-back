import { DatabaseService } from './database.service';
export declare class AppModule {
    private dbService;
    constructor(dbService: DatabaseService);
    init(): Promise<void>;
}
