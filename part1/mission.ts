export async function mission(agents : {name?: string, code: number}[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
        for (const item of agents) {
            if (item.code != 42 && item.code != 0.01 && item.code != 0.07)
                return reject('Bad agent');
            if (item.code == 0.07)
                return resolve(true);
            return resolve(false);
        };
    });
}