import { mission } from './mission.ts';

export async function missionTester(agents : {name?: string, code: number}[]): Promise<void> {
    const result = await mission(agents);
    try {
        if (result == true)
            throw('success');
        else
            throw('failure');
    } catch (err) {
        console.log('Mission report: ' + err);
    }
}
