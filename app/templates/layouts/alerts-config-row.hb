<td>
                <span class="metric-name">{{metric_label}}</span>
                <input type="checkbox" name="show_live" {{#if live_responses}}checked="checked"{{/if}}/>
            </td>
            <td>
                <input type="number" class="alert_threshold" value="{{alert_threshold}}"/>
            </td>