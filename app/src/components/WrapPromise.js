export default function WrapPromise(promise) {
    let status='pending';
    let data;
    let wrapper = promise.then(
        result => {
            status='fulfilled';
            data=result;
        },
        e => {
            status='rejected';
            data=e;
        }
    );

    return {
        get() {
            switch(status){
                case 'pending':
                    // pendingの時はthrowする
                    throw wrapper;
                case 'fulfilled':
                    // fulfilledの時はdataを返すのでreturnする
                    return data;
                case 'rejected':
                    // rejectedの時はエラーが出るからthrowする
                    throw data;
                default:
                    break;
            }
        }
    }
}