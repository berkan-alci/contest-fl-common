import { Subjects } from "../enums/EventSubjects";
export interface LogUpdatedEvent {
    subject: Subjects.LogUpdated;
    data: {
        id: string;
        version: number;
        userId: string;
        title: string;
        description: string;
        startsAt: Date;
        expiresAt: Date;
    };
}
