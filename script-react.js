const techReact = (params) => (
  <div className="tech" key={params.id}>
    <img src={`https://logo.clearbit.com/${params.url}`} alt="" />
    <span>{params.name}</span>
  </div>
);

// React.createElement('div', { className: 'tech' }, [
//   React.createElement('img', {
//     src: `https://logo.clearbit.com/${params.url}`,
//   }),
//   React.createElement('span', null, params.name),
// ]);

const TECHNOLOGIES = [
  {
    id:1,
    url: 'reactjs.org',
    name: 'React JS',
  },
  {
    id:2,
    url: 'nodejs.org',
    name: 'Node JS',
  },
  {
    id:3,
    url: 'graphql.org',
    name: 'GraphQL',
  },
];

const techRendered = TECHNOLOGIES.map((techProps) => techReact(techProps));

ReactDOM.render(techRendered, document.getElementById('root'));
