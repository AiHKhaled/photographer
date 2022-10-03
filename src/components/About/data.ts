export type opinionProps = { [key: string]: any; id?: number; opinion?: string; name?: string };
export const opinions: opinionProps = [
    {
        id: 1,
        opinion:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nam commodi reiciendis molestias iure, est quod a pariatur aliquam nobis.',
        name: 'someone'
    },
    {
        id: 2,
        opinion:
            'Lorem, ipsum dolor sit amet consectetur adipisicing e molestias iure, est quod a pariatur aliquam nobis.',
        name: 'someoneElse'
    },
    {
        id: 3,
        opinion:
            'Lorem, adipisicing elit. Delectus nam commodi reiciendis molestias iure, est quod a pariatur aliquam nobis.',
        name: 'somebody'
    },
    {
        id: 4,
        opinion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat labore architecto a quia laudantium eum repellendus adipisci facilis. Eum ipsa maiores numquam ducimus veritatis aspernatur autem sint magni dolores, tempora, rerum velit, saepe quisquam minima suscipit atque ipsum sed?',
        name: 'oneDay'
    }
] as opinionProps;
