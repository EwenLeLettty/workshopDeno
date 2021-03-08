import { mission } from './mission.ts';

export async function missionTester(agents : {name?: string, code: number}[]): Promise<void> {
    const result = await mission(agents);
    try {
        if (result == true)
            throw('success');
        else if (result == 'Bad agent')
            throw('Bad agent');
        else
            throw(false);
    } catch (err) {
        if (err = 'Bad agent')
            console.log('Bad agent');
        console.log('Mission report: ' + err);
    }
}
