type UseThemer = {
	isDropdownShown: boolean,
	toggleDropdown: () => void,
	preferredColorScheme: string,
	applyColorScheme: (color: string, save: boolean) => void
};

export default UseThemer;