/**
 * controller for a single h.w
 * 
 * Created October 14th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.HwsHwController = Ember.ObjectController.extend({
	/**
	 * will display an alert box
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will display an success box
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will display message
	 * @type {String}
	 */
	message: null,
	
	actions: {
		
		/**
		 * when the user clicks to upload files
		 */
		uploadFiles: function(){
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
						var file = Nerdeez.File.createRecord(
							{
								title: item.filename,
								file: item.url,
								hw: xthis.get('content'),
								size: item.size
							}
						);
						file.transaction.commit();
						file.one('becameError', function(){
							xthis.set('isError', true);
							xthis.set('isSuccess', false);
							xthis.set('message', 'Communication error with server');	
						})
					})
					xthis.set('isSuccess', true);
					xthis.set('isError', false);
					xthis.set('message', 'Successfully uploaded files');					
				},
				function(reason){ //error
					xthis.set('isError', true);
					xthis.set('isSuccess', false);
					xthis.set('message', 'Failed to upload Files');
				}
			);
		},
		
		/**
		 * when the user clicks to share with facebook
		 */
		fbShare: function(){
			//TODO
		},
		
		/**
		 * when the user clicks to download a file
		 * @param {Nerdeez.File} file
		 */
		downloadFile: function(file){
			var win=window.open(file.get('file'), '_blank');
			win.focus();
		},
	}
});
