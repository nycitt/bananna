<div class="field">
	<span class="field-name">Presentation Title</span>
	<input type="text" name="title" value="{{title}}"/>
</div>
<div class="field">
	<span class="field-name">Presentation Subtitle</span>
	<input type="text" name="subtitle" value="{{subtitle}}"/>
</div>

<div class="field">
	<span class="field-name">Time for Presentation</span>
	<input type="text" name="hours" value="{{hours}}"/>
	<span class="colon">:</span>
	<input type="text" name="minutes" value="{{minutes}}"/>

	<span class="field-name">Track Time</span>
	<input type="checkbox" name="track_time" {{#if track_time}}checked="checked"{{/if}}/>
</div>