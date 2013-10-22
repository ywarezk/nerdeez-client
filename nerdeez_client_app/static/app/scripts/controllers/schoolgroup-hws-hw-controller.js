/**
 * controller for a single h.w
 * 
 * Created October 14th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.HwsHwController = Ember.ObjectController.extend(Nerdeez.Status,Nerdeez.LikeDislike,Nerdeez.Share,{
	/**
	 * will hold the flag message input from the flag modal
	 * @type {String}
	 */
	flagMessage: null,
	
	/**
	 * the file that is being marked as flagged
	 * @type {DS.File}
	 */
	flaggedFile: null,
	
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
							xthis.error('Communication error with server');	
						})
					})
					xthis.success('Successfully uploaded files');			
				},
				function(reason){ //error
					xthis.error('Failed to upload Files');
				}
			);
		},
		
		/**
		 * when the user clicks to share with facebook
		 */
		fbShare: function(recordToShare){
			this.set('shareInit', function(){
				this.set('shareLink', recordToShare.get('file'));
				this.set('shareName', recordToShare.get('title'));
			});
			this.send('share');
		},
		
		/**
		 * when the user clicks to download a file
		 * @param {Nerdeez.File} file
		 */
		downloadFile: function(file){
			var win=window.open(file.get('file'), '_blank');
			win.focus();
		},
		
		/**
		 * report the file as flagged
		 * @param {Nerdeez.File} file
		 */
		flagFile: function(file){
			var xthis = this;
			var file = this.get('flaggedFile');
			file.set('flag', true);
			file.set('flag_message', this.get('flagMessage'));
			file.transaction.commit();
			file.one('didUpdate', function(){
				xthis.success('Successfully sent the flag report');
			})
			file.one('becameError', function(){
				xthis.error('Communication error: Failed to send the report, please try again');
			})
			$('#flag-file').modal('hide');
		},
		
	}
});
