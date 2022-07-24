import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';
import Icon from '@mdi/react'
import { mdiMapMarker } from '@mdi/js';
 
export default function Edit( { attributes, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
			<Icon path={mdiMapMarker}
				title="Location"
				size="1.5rem"/>
            <TextControl
				class="ws-dive-block-location"
                value={ attributes.location }
                onChange={ ( val ) => setAttributes( { location: val } ) }
            />
        </div>
    );
}