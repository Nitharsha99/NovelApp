export type AlertType = 'success' | 'danger' | 'warning' | 'info';

export interface Alert{
    type: AlertType;
    message?: string | string[];
    timeout?: number;
    showClose?: boolean;
    showType?: boolean;
    onClose?: () => void;
}