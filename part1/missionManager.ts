import { mission } from './mission';

export async function missionTester(agents : {name?: string, code: number}[]): Promise<void> {
    const result = await mission(agents);
    if (result == true)
        console.log('Mission report: success');
    else
        console.log('Mission report: failure');
}
