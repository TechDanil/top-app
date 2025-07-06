import { IParagraphProps } from "@/components/Paragraph/ Paragraph.props"
import cn from "classnames"
import styles from './Paragraph.module.css'

const Paragraph = (props: IParagraphProps) => {
  const { size = "medium", children } = props

  return <p className={cn(styles.description, {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
  })}>{children}</p>
}

export default Paragraph