/**
 * @name 配置文件
 */

/** 应用名称 */
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'future harvest'

/** 邮箱 */
export const EMAIL = 'customerservice@future-harvest.com'

/** 地址 */
export const ADDRESS = '---'

/** 版权所有 */
export const COPYRIGHT = '© FUTURE HARVEST HK LIMITED 2025. All rights reserved.'

export interface MenuItem {
  name: string
  selector?: string
}

/** 菜单列表 */
export const menuList: MenuItem[] = [
  {
    name: 'Features',
    selector: 'value-proposition',
  },
  {
    name: 'Pricing',
    selector: 'core-capabilities',
  },
  {
    name: 'Careers',
    selector: 'business-focus',
  },
  {
    name: 'Help',
    selector: 'global-presence',
  },
]
