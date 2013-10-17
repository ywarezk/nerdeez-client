/**
 * the controller for the school group files page
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.HwsIndexController = Ember.ObjectController.extend({
	/**
	 * holds the title of a new hw
	 * @type {String}
	 */
	newHwTitle: null,
	
	/**
	 * holds the description for a new hw
	 * @type {String}
	 */
	newHwDescription: null,
	
	/**
	 * holds the files for a new hw
	 * @type {Ember.Array}
	 */
	newHwFiles: Ember.A(),
	
	/**
	 * when true display the error message in the new hw dialog
	 * @type {Boolean} 
	 */
	isNewHwError: false,
	
	/**
	 * will display a status message for the new hw
	 * @type {String}
	 */
	hwMessage: null,
	
	/**
	 * determine if the loading is displayed in the new hw modal
	 * @type {Boolean}
	 */
	isNewHwLoading: false,
	
	/**
	 * will display the alert success box
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * the message in the alert box
	 * @type {String}
	 */
	message: null,
	
	/**
	 * holds the newly created hw
	 * @type {Nerdeez.Hw}
	 */
	newCreatedHw: null,
	
	/**
	 * will hold the belongs to school group
	 * @type {Nerdeez.Schoolgroup}
	 */
	schoolGroup: null,
	
	actions: {
		
		/**
		 * when the user choose to 
		 */
		uploadHW: function(){
			var xthis = this;
			filepicker.pickAndStore(
				{
					multiple: true,
					extensions: Nerdeez.UPLOAD_ALLOWED_EXTENSIONS,
					services: Nerdeez.UPLOAD_SERVICES
				},
				{
					location: 'S3',
					path: '/files/'
				},
				function(inkBlobs){ //success
					inkBlobs.forEach(function(item, index, enumerable){
						var file = 
							{
								title: item.filename,
								file: item.url,
								size: item.size 
							}
						xthis.get('newHwFiles').pushObject(file);	
					})
					
				},
				function(reason){ //error
					xthis.set('isNewHwError', true);
					xthis.set('hwMessage', 'Failed to upload File');
				}
			);
		},
		
		/**
		 * when the user saves the new hw modal
		 * @param {function} use this function on success
		 */	
		newHW: function(onSuccess){
			if(!$('#new-hw .js-validation').validationEngine('validate'))return;
			var xthis = this;
			xthis.set('isNewHwLoading', true);
			var hw = Nerdeez.Hw.createRecord();
			hw.set('title', this.get('newHwTitle')); 
			hw.set('description', this.get('newHwDescription')); 
			hw.set('school_group', this.get('schoolGroup')); 
			hw.transaction.commit();
			hw.one('didCommit', function(){
				xthis.set('isNewHwLoading', false);
				if(xthis.get('newHwFiles.length') > 0 ){
					xthis.get('newHwFiles').forEach(function(item, index, enumerable){
						var file = Nerdeez.File.createRecord();
						file.set('title', item.title);
						file.set('file', item.file);
						file.set('size', item.size);
						file.set('hw', hw);
						file.transaction.commit();						
					})
					xthis.set('isNewHwLoading', false);
					onSuccess();
				}
				else{
					xthis.set('isNewHwLoading', false);
					onSuccess();
				}
				xthis.set('isSuccess', true);
				xthis.set('message', 'Successfully created the H.W');
				xthis.set('newCreatedHw', hw);
				xthis.set('newHwFiles', Ember.A());
				xthis.set('newHwTitle', null);
				xthis.set('newHwDescription', null);
				xthis.get('content').addObject(hw);
			});
			hw.one('becameError', function(json, temp1, temp2){
				xthis.set('isNewHwLoading', false);
				xthis.set('hwMessage', json.errors);
			});
		},
		
		/**
		 * when the user clicks the fb share will use doron's mixins
		 */
		fbShare: function(e){
			//TODO
			console.log('fb share');
			return false;
		}
	}
});
