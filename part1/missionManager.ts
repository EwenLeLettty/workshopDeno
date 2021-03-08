import { mission } from './mission.ts';

export async function missionTester(agents : {name?: string, code: number}[]): Promise<void> {
    const result = await mission(agents);
    try {
            throw(result);
    } catch (err) {
        console.log('Mission report: ' + err);
    }
}
