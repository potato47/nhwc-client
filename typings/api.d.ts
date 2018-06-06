declare type IApiData = any;
declare type IApiMetaData = any;
declare type IApiMethod = 'get' | 'post' | 'delete' | 'put';
declare type IApiParams = Object | null;

declare type IApiSuccessFunction = (data?: IApiData) => void;

declare type IApiNoneNullErrorFunction = (data?: IApiData) => void;

declare type IApiErrorFunction = IApiNoneNullErrorFunction | null | undefined;

declare type IApiMetaFunction = (meta?: IApiMetaData) => void;
