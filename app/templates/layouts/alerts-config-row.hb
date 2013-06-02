<td>
                <span class="label">{{metric_label}}</span>
                <input type="checkbox" name="show_live" {{#if show_live}}checked="checked"{{/if}}/>
            </td>
            <td>
                <input type="number" class="alert_threshold" value="{{alert_threshold}}"/>
            </td>