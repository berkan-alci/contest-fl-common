import { Subjects } from "../enums/EventSubjects";


export interface LogDeletedEvent {
    subject: Subjects.LogDeleted;
    data: {
        id: string;
        version: number;
        user: {
            id: string;
        }
    }
};