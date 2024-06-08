import { getPostUrlBySlug } from "@utils/url-utils.ts";
import Fuse from "fuse.js";
import React, {
	type ChangeEvent,
	type JSX,
	useMemo,
	useRef,
	useState,
} from "react";
import {
	noResultsWrapper,
	resultItem,
	resultItemDivider,
	resultItemSubtitle,
	resultItemTitle,
	resultItemsList,
	searchBar,
	searchBarInside,
	searchButton,
	searchInput,
	searchPanel,
} from "./SearchBar.css";

export default function SearchBar({
	posts,
	arrowIcon,
	searchInputIcon,
	searchButtonIcon,
}: {
	posts: never[];
	arrowIcon: JSX.Element;
	searchInputIcon: JSX.Element;
	searchButtonIcon: JSX.Element;
}) {
	const [searchValue, setSearchValue] = useState<string>("");

	const fuse = useMemo(
		() => new Fuse(posts, { keys: ["data.title", "data.subtitle"] }),
		[posts],
	);
	const results = useMemo(() => fuse.search(searchValue), [fuse, searchValue]);

	const popoverRef = useRef<HTMLDivElement>(null);

	const togglePanel = () => {
		popoverRef.current?.togglePopover();
	};

	const handleInputClick = () => {
		if (searchValue?.length) {
			popoverRef.current?.showPopover();
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);

		if (e.target.value?.length) {
			popoverRef.current?.showPopover();
		} else {
			popoverRef.current?.hidePopover();
		}
	};

	const renderSearchBar = (): JSX.Element => {
		return (
			<>
				{searchInputIcon}

				<input
					placeholder="Search"
					value={searchValue}
					onClick={handleInputClick}
					onChange={handleInputChange}
					className={searchInput}
				/>
			</>
		);
	};

	return (
		<>
			<div className={searchBar}>{renderSearchBar()}</div>

			<button
				onClick={togglePanel}
				aria-label="Search Panel"
				className={searchButton}
			>
				{searchButtonIcon}
			</button>

			{/* @ts-expect-error popover attribute isn't supported in TS */}
			<div ref={popoverRef} popover="auto" className={searchPanel}>
				<div className={searchBarInside}>{renderSearchBar()}</div>

				{results?.length ? (
					<div className={resultItemsList}>
						{results.map(({ item }, index) => (
							<>
								<a
									key={index}
									href={getPostUrlBySlug(item.slug)}
									className={resultItem}
								>
									<div className={resultItemTitle}>{item.data.title}</div>
									<div className={resultItemSubtitle}>{item.data.subtitle}</div>

									{arrowIcon}
								</a>

								{index !== results.length - 1 && (
									<hr className={resultItemDivider} />
								)}
							</>
						))}
					</div>
				) : (
					<div className={noResultsWrapper}>No results found</div>
				)}
			</div>
		</>
	);
}
