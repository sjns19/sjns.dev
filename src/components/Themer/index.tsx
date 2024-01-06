import type { ThemerOptionProps } from './types';

import classes from './Themer.module.scss';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { createClassList } from '@/utils';
import { colorPalettes } from '@/data/theme';
import useThemer from '@/hooks/useThemer';

export default function Themer() {
	const { preferredColorScheme, isDropdownShown, toggleDropdown, applyColorScheme } = useThemer();
	const classList = createClassList({
		[classes['themer']]: true,
		[classes['is-shown']]: isDropdownShown
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => applyColorScheme(e.target.value, true);

	return (
		<div className={classList}>
			<button className={classes['themer-toggler']} onClick={toggleDropdown} title="Change color">
				<IoColorPaletteSharp size="18" />
			</button>
			<div className={classes['themer-dropdown']}>
				<h3>Colors</h3>
				<ul className={classes['themer-dropdown-content']}>
					{colorPalettes.map((color, index) => (
						<ThemerOption
							key={index}
							color={color}
							active={preferredColorScheme === color}
							onChange={onChange}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

const ThemerOption = ({ color, active, onChange }: ThemerOptionProps) => {
	const c = color ? color : '';
	const title = c.charAt(0).toUpperCase() + c.slice(1);
	return (
		<li className={classes['themer-option']} title={title} data-color-scheme={color}>
			<input
				type="radio"
				className={classes['themer-option-pill']}
				name="theme-color"
				value={color}
				checked={active}
				onChange={onChange}
			/>
			<label className={classes['themer-option-label']} />
		</li>
	);
};