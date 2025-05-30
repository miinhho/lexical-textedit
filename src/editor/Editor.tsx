import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import type { ComponentProps } from "react";
import styles from "./Editor.module.scss";
import { theme } from "./editorTheme";
import { nodes } from "./nodes";
import { AutoFocusPlugin } from "./plugins/AutoFocusPlugin";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { InlineToolbarPlugin } from "./plugins/InlineToolbarPlugin";
import { MarkdownPlugin } from "./plugins/MarkdownPlugin";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

const initialConfig: ComponentProps<typeof LexicalComposer>['initialConfig'] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
  nodes: nodes,
  theme: theme,
};

export const Editor = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <InlineToolbarPlugin />
      <div className={styles.editorContainer}>
        <RichTextPlugin
          contentEditable={<ContentEditable className={styles.contentEditable} />}
          placeholder={<div className={styles.placeholder}>글을 써주세요</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <AutoFocusPlugin />
      <HistoryPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <CodeHighlightPlugin />
      <MarkdownPlugin />
    </LexicalComposer>
  );
}