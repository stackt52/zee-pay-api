export interface CollectRequest {
  payer_number: string;
  external_reference: string;
  payment_narration: string;
  currency: string;
  amount: string;
  account_number?: string | null;
}

export interface TransactionStatus {
  amount: string;
  currency: string;
  final_status: number;
  order_id: string;
  transaction_id: string;
  payer_number: string;
  response_code: number;
  response_message: string;
  username?: string;
  password?: string;
  account_number?: string;
  narration: string;
  [key: string]: any;
}

export interface MessageResponse {
  message: string;
}

export interface UnauthorizedResponse {
  statusCode: number;
  message: string;
  clientId?: any;
  services?: any;
}

export interface ErrorResponse {
  message: string;
}

export interface CallbackRegistrationRequest {
  callback_url: string;
}
