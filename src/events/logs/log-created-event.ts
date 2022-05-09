import { Subjects } from "../enums/EventSubjects";

export interface LogCreatedEvent {
    subject: Subjects.LogCreated;
    data: {
        id: string;
        version: number;
        userId: string;
        title: string;
        description: string;
        startsAt: Date;
        expiresAt: Date;
        user: {
            id: string;
        }
    }
}