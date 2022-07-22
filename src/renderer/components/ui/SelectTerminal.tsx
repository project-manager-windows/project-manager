import { Dropdown }            from 'primereact/dropdown';
import '../../styles/SelectTerminal.scss';
import { useEffect, useState } from 'react';
import useLogo                 from '../hooks/useLogo';

const SelectTerminal = (props: { id: any, value?: any, setVal?: (value: any) => void }) => {
	const { value, setVal, id }   = props;
	const [newValue, setNewValue] = useState<any>();
	useEffect(() => {
		setNewValue(value);
	}, [value, id]);
	const data              = window.electron.terminals.getAll();
	const IDEs              = Object.values(data);
	const defaultTerminalId = window.electron.settings.get('defaultTerminal');

	if (defaultTerminalId) {
		IDEs.unshift({
						 id   : 0,
						 name : `${data[defaultTerminalId].name} (default)`,
						 logo : data[defaultTerminalId].logo,
						 color: data[defaultTerminalId].color
					 });
	} else {
		IDEs.unshift({
						 id   : 0,
						 name : `(default)`,
						 logo : window.pixel,
						 color: 'transparent'
					 });
	}
	const selectedCountryTemplate = (option: any) => {
		if (option) {
			const logo = useLogo({
									 type : 'terminal',
									 name : option.name,
									 logo : option.logo,
									 color: option.color
								 });
			return (
				<div className='terminal-item terminal-item-value'>
					{logo}
					<div>{option.name}</div>
				</div>
			);
		}
		if (defaultTerminalId) {
			const logo = useLogo({
									 type : 'terminal',
									 name : `${data[defaultTerminalId].name} (default)`,
									 logo : data[defaultTerminalId].logo,
									 color: data[defaultTerminalId].color
								 });
			return (
				<div className='terminal-item terminal-item-value'>
					{logo}
					<div>{`${data[defaultTerminalId].name} (default)`}</div>
				</div>
			);
		} else {
			const logo = useLogo({
									 type : 'terminal',
									 name : 'default',
									 logo : window.pixel,
									 color: 'transparent'
								 });
			return (
				<div className='terminal-item terminal-item-value'>
					{logo}
					<div>(default)</div>
				</div>
			);
		}

	};
	const countryOptionTemplate   = (option: any) => {
		const logo = useLogo({
								 type : 'terminal',
								 name : option.name,
								 logo : option.logo,
								 color: option.color
							 });
		return (
			<div className='terminal-item'>
				{logo}
				<div>{option.name}</div>
			</div>
		);
	};
	const setValue                = (e: any) => {
		setNewValue(e.value);
		if (setVal) setVal(e.value);
	};
	return (
		<div className='SelectTerminal'>
			<Dropdown
				style={{ width: 'calc(100% - 35px)' }}
				options={IDEs}
				optionLabel='name'
				value={newValue}
				optionValue='id'
				onChange={setValue}
				filter
				// showClear
				filterBy='name'
				placeholder='Select a Country'
				valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate}
			/>
		</div>
	);
};

export default SelectTerminal;
