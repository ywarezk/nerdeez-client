/**
 * the controller for the school group files page
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.SchoolgroupFilesController = Ember.ObjectController.extend({
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
	 * will hold the file url when opening a new hw thread
	 * @type {String}
	 */
	newHwFileUrl: null,
	
	/**
	 * will hold the file title when opening a new hw thread
	 * @type {String}
	 */
	newHwFileTitle: null,
	
	/**
	 * will hold the file size when opening a new hw thread
	 * @type {String}
	 */
	newHwFileSize: null,
	
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
	
	actions: {
		
		/**
		 * when the user choose to 
		 */
		uploadHW: function(){
			var xthis = this;
			filepicker.pickAndStore(
				{
					multiple: true,
					extensions: ['.doc', '.docx', '.pdf', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar', '.png', '.jpg', '.jpeg', '.bmp', '.gif'],
					services: ['COMPUTER','DROPBOX', 'GOOGLE_DRIVE', 'SKYDRIVE', 'URL', 'GMAIL','BOX']
				},
				{
					location: 'S3',
					path: '/nerdeez-server/files/'
				},
				function(inkBlobs){ //success
					xthis.set('newHwFileUrl', inkBlobs.url);
					xthis.set('newHwFileTitle', inkBlobs.filename);
					xthis.set('newHwFileSize', inkBlobs.size);
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
			var xthis = this;
			var hw = Nerdeez.Hw.createRecord();
			hw.set('title', this.get('newHwTitle')); 
			hw.set('description', this.get('newHwDescription')); 
			hw.set('school_group', this.get('content')); 
			hw.transaction.commit();
			hw.one('didCreate', function(){
				if(this.get('newHwFileUrl') != null){
					var file = Nerdeez.File.createRecord();
					file.set('title', xthis.get('newHwFileTitle'));
					file.set('hw', this);
					file.set('file', xthis.get('newHwFileUrl'));
					file.transaction.commit();
					file.one('didCreate', function(){
						xthis.set('isNewHwLoading', false);
						onSuccess();
					})
				}
				else{
					xthis.set('isNewHwLoading', false);
					onSuccess();
				}
			}) 
		}
	}
});
