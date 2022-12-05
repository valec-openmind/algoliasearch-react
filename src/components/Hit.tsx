import { FunctionComponent } from "react";

interface HitProps {
	hit: {
		name: string;
		price: string;
		categories: string[];
		image: string;
	};
}

const Hit: FunctionComponent<HitProps> = ({ hit }) => {
	return (
		<article>
			<img src={hit.image} alt={hit.name} />
			<p>{hit.categories[0]}</p>
			<h1>{hit.name}</h1>
			<p>${hit.price}</p>
		</article>
	);
};

export default Hit;
