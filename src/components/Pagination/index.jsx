import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as S from "./pagination.styled";

export default class Pagination extends React.Component {
	render() {
		const { currentPage, totalPages, onPageChange } = this.props;

		return (
			<S.BoxPagination>
				<S.BoxButtons>
					<S.Button
						disabled={currentPage === 1}
						onClick={() => onPageChange(currentPage - 1)}
					>
						<IoIosArrowBack size={20} />
					</S.Button>

					<S.Button
						disabled={currentPage === totalPages}
						onClick={() => onPageChange(currentPage + 1)}
					>
						<IoIosArrowForward size={20} />
					</S.Button>
				</S.BoxButtons>

				<p>
					Página {currentPage} de {totalPages}
				</p>
			</S.BoxPagination>
		);
	}
}
