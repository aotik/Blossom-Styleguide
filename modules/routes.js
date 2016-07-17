import React from 'react'
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import App from './App'

import { sbElements, sbAnimations, sbUtility } from './Sidebar'

import { elMain, elHeader, elButtons, elMessages, elTables, elInput, elProgressBars, elLabels, elLists, elCards, elLoaders, elStages, elImages, elComments, elDividers, elDropdown } from './Elements'
import { deMain, deHeader, deDefault, deScheme, deTypography, deAnimations, deGrid, deBreakpoints} from './Design'
import { ulMain, ulHeader, ulDefault, ulLayout, ulCenter, ulHide } from './Utility'

import Home from './Home'

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="elements" component={{main: elMain, header: elHeader, sidebar: sbElements}}>
			<IndexRedirect to="buttons" />
			<Route path="buttons" component={elButtons}/>
			<Route path="messages" component={elMessages}/>
			<Route path="tables" component={elTables}/>
			<Route path="input" component={elInput}/>
			<Route path="progress-bars" component={elProgressBars}/>
			<Route path="labels" component={elLabels}/>
			<Route path="lists" component={elLists}/>
			<Route path="cards" component={elCards}/>
			<Route path="loaders" component={elLoaders}/>
			<Route path="stages" component={elStages}/>
			<Route path="images" component={elImages}/>
			<Route path="comments" component={elComments}/>
			<Route path="dividers" component={elDividers}/>
			<Route path="dropdown" component={elDropdown}/>
		</Route>
		<Route path="design" component={{main: deMain, header: deHeader, sidebar: sbAnimations}}>
			<IndexRedirect to="scheme" />
			<Route path="scheme" component={deScheme}/>
			<Route path="typography" component={deTypography}/>
			<Route path="animations" component={deAnimations}/>
			<Route path="grid" component={deGrid}/>
			<Route path="breakpoints" component={deBreakpoints}/>
		</Route>
		<Route path="utility" component={{main: ulMain, header: ulHeader, sidebar: sbUtility}}>
			<IndexRedirect to="center" />
			<Route path="center" component={ulCenter}/>
			<Route path="hide" component={ulHide}/>
			<Route path="layout" component={ulLayout}/>
		</Route>
	</Route>
)
