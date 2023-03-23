import React, { Component } from "react";
import * as S from "./character.styled";

export default class Character extends Component {
	render() {
		const { avatar, name, species, gender, origin, status } = this.props;

		return (
			<S.Card>
				<img
					className={`avatar ${status}`}
					src={avatar}
					alt={`avatar ${name}`}
				/>
				<h2>{name}</h2>

				<span>
					<img
						src="https://cdn-icons-png.flaticon.com/512/9672/9672524.png"
						alt="icon species"
					/>
					{species}
				</span>

				<span>
					<img
						src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
						alt="icon gender"
					/>
					{gender}
				</span>

				<span>
					<img
						src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
						alt="icon location"
					/>
					{origin}
				</span>
			</S.Card>
		);
	}
}
