<div class="skills" ng-controller="skillsController">
	<h1>My Skills</h1>
	<ul ng-repeat="skillList in skills">
	<li ng-repeat="skill in skillList">
	{{ skill }}
	</li>
	</ul>

	<div ng-show="highlights" ng-click="showSection( 'highlight-toggle', 'highlights' )" class="highlight-toggle" ><span>View</span> Highlights</div>
	<div class="highlights">
		<div ng-repeat="highlight in highlights">
			<div class="name">{{ highlight.name }}</div>
			<div class="description"> 
				<div ng-repeat="description in highlight.description" >{{ description }}</div>
			</div>
		</div>
	</div>

	<div ng-show="education" ng-click="showSection( 'education-toggle', 'education' )" class="education-toggle"><span>View</span> Education</div>
		<div class="education">
			<div ng-repeat="edu in education">
				<div class="year ng-click=">{{ edu.year }}</div>
				<div class="field"> 
					<div ng-repeat="field in edu.field">{{ field }}</div>
				</div>
			</div>
		</div>
	</div>
</div>