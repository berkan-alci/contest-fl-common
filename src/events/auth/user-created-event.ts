import { Subjects } from "../enums/EventSubjects";

export interface UserCreatedEvent {
    subject: Subjects.UserCreated,
    data: {
        id: string;
    }
};