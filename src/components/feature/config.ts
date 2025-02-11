export type TExperience = {
	company: string
	goal: string
	startPeriod: string
	endPeriod: string
	responsibilities: string[]
	achievements: string[]
}

export const experience: TExperience[] = [
	{
		company: 'МТС Банк',
		goal: 'разработка и поддержание продукта',
		startPeriod: 'Май 2024',
		endPeriod: 'Октябрь 2024',
		responsibilities: [
			'Дебагинг продукта после релизов и инцидентов',
			'Разработка web страниц и компонентов',
			'Разметка событий',
			'Кодревью, рефакторинг, оптимизация',
		],
		achievements: ['Успешно запущенный продукт'],
	},
	{
		company: 'Kokoc.tech / Landau Interactive',
		goal: 'разработка интерфейсов для клиентов',
		startPeriod: 'Июль 2019',
		endPeriod: 'Март 2024',
		responsibilities: [
			'Проработка архитектуры приложений',
			'Разработка отзывчивых UI компонентов',
			'Создание сложных элементов с бизнес логикой (виджеты, интерактивные ' +
				'карты, многоуровневые формы, графики, сложные таблицы и т.д.)',
			'Кодревью, рефакторинг, оптимизация приложений',
		],
		achievements: [
			'11 успешно запущенных проектов',
			'Лидировал проект разработки мобильного приложения',
			'Участие в образовательных мероприятиях для сотрудников',
			'Участие в создании стандартов разработки команды',
		],
	},
	{
		company: 'Paymon',
		goal: 'разработка лендингов',
		startPeriod: 'Июль 2018',
		endPeriod: 'Май 2019',
		responsibilities: [
			'Верстка сложных дизайнов',
			'Разработка интерактивных элементов с использование jQuery',
			'Создание сложных анимаций с использование CSS/jQuery',
		],
		achievements: [
			'Успешно запущен стартап',
			'Создано 8 сайтов',
			'Сверстан прототип биржи',
		],
	},
]

export const skills = [
	'JavaScript',
	'TypeScript',
	'React',
	'React Native',
	'Next.JS',
	'Redux',
	'Effector',
	'REST',
	'GraphQL',
	'Jest',
]
