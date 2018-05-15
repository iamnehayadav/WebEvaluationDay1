export interface ICourse {
    id: number;
    name: string;
}
export interface IBatch {
    id: number;
    name: string;
    courseId: number;
}
export interface IStudent {
    id: number;
    name: string;
}
export interface IBatchStudentMap {
    id: number;
    batchId: number;
    studentId: number;
}
export interface ISubject {
    id: number;
    name: string;
    courseId: number;
}
export interface ITeacher {
    id: number;
    name: string;
    subjectId: number;
}
export interface ILecture {
    id: number;
    name: string;
    batchId: number;
    teacherId: number;
}
