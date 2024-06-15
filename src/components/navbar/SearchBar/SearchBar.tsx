import Popover from '@components/common/Popover/Popover.tsx';
import { getPostUrlBySlug } from '@utils/url-utils.ts';
import Fuse from 'fuse.js';
import {
	type ChangeEvent,
	Fragment,
	type JSX,
	useMemo,
	useRef,
	useState,
} from 'react';
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
} from './SearchBar.css';

export default function SearchBar({
	posts,
	arrowIcon,
	searchInputIcon,
	searchButtonIcon,
}: {
	posts: { slug: string; data: { title: string; subtitle: string } }[];
	arrowIcon?: JSX.Element;
	searchInputIcon?: JSX.Element;
	searchButtonIcon?: JSX.Element;
}) {
	const [searchValue, setSearchValue] = useState<string>('');
	const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

	const fuse = useMemo(
		() => new Fuse(posts, { keys: ['data.title', 'data.subtitle'] }),
		[posts],
	);
	const results = useMemo(() => fuse.search(searchValue), [fuse, searchValue]);

	const handleInputClick = () => {
		console.log({ searchValue, leng: searchValue?.length });
		if (searchValue?.length) {
			setIsPopoverOpen(true);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);

		if (e.target.value?.length) {
			setIsPopoverOpen(true);
		} else {
			setIsPopoverOpen(false);
		}

		// e.target.focus();
	};

	const renderSearchBar = (): JSX.Element => {
		return (
			<>
				{searchInputIcon}

				<input
					placeholder='Search'
					value={searchValue}
					onClick={handleInputClick}
					onChange={handleInputChange}
					className={searchInput}
				/>
			</>
		);
	};

	return (
		<Popover
			isOpen={isPopoverOpen}
			onOpenChange={setIsPopoverOpen}
			content={
				<div className={searchPanel}>
					<div className={searchBarInside}>{renderSearchBar()}</div>

					{results?.length ? (
						<div className={resultItemsList}>
							{results.map(({ item }, index) => (
								<Fragment key={item.slug}>
									<a href={getPostUrlBySlug(item.slug)} className={resultItem}>
										<div className={resultItemTitle}>{item.data.title}</div>
										<div className={resultItemSubtitle}>
											{item.data.subtitle}
										</div>

										{arrowIcon}
									</a>

									{index !== results.length - 1 && (
										<hr className={resultItemDivider} />
									)}
								</Fragment>
							))}
						</div>
					) : (
						<div className={noResultsWrapper}>No results found</div>
					)}
				</div>
			}
		>
			<>
				<div className={searchBar}>{renderSearchBar()}</div>

				<button
					// onClick={togglePanel}
					aria-label='Search Panel'
					className={searchButton}
					type={'button'}
				>
					{searchButtonIcon}
				</button>
			</>
		</Popover>
	);
}
