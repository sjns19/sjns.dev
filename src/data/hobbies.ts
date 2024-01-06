/** Interests and technologies data */

import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiPhp, SiAdobeillustrator } from 'react-icons/si';
import { FaSass, FaReact, FaNodeJs } from 'react-icons/fa';
import { GiBearFace } from 'react-icons/gi';
import { GrMysql } from 'react-icons/gr';

export const interests = [
	'coding 🧑‍💻',
	'sketching ✏️',
	'science 🧬',
	'technologies 🖥️',
	'metal music 🎶',
	'memes 👻'
];

export const technologies = [
	{
		title: 'javascript',
		color: '#efdb50',
		icon: IoLogoJavascript
	},
	{
		title: 'sass',
		color: '#c66494',
		icon: FaSass
	},
	{
		title: 'typescript',
		color: '#0076c6',
		icon: SiTypescript
	},
	{
		title: 'react',
		color: '#68dafa',
		icon: FaReact
	},
	{
		title: 'next.js',
		color: '#ffffff',
		icon: SiNextdotjs
	},
	{
		title: 'zustand',
		color: '#edb522',
		icon: GiBearFace
	},
	{
		title: 'node.js',
		color: '#5aa14b',
		icon: FaNodeJs
	},
	{
		title: 'php',
		color: '#8d95c0',
		icon: SiPhp
	},
	{
		title: 'mysql',
		color: '#638ba3',
		icon: GrMysql
	},
	{
		title: 'illustrator',
		color: '#f99c27',
		icon: SiAdobeillustrator
	}
];