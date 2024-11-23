import * as core from '@actions/core'

/**
 * Indicates whether the POST action is running
 */
export const IsPost = !!core.getState('isPost')

/**
 * The repository path for the POST action. The value is empty during the MAIN action.
 */
export const RepositoryPath = core.getState('repositoryPath')

/**
 * The set-safe-directory for the POST action. The value is set if input: 'safe-directory' is set during the MAIN action.
 */
export const PostSetSafeDirectory = core.getState('setSafeDirectory') === 'true'

/**
 * The SSH key path for the POST action. The value is empty during the MAIN action.
 */
export const SshKeyPath = core.getState('sshKeyPath')

/**
 * The SSH known hosts path for the POST action. The value is empty during the MAIN action.
 */
export const SshKnownHostsPath = core.getState('sshKnownHostsPath')

/**
 *  The post-clean setting for the POST action
 */
export const PostClean = core.getState('postClean') === 'true'

/**
 * The ignored clean paths for the POST action. The value is set if input: 'clean-exclude' is set during the MAIN action.
 */
export const CleanExclude: string[] = JSON.parse(core.getState('cleanExclude') || '[]')

/**
 * Save the repository path so the POST action can retrieve the value.
 */
export function setRepositoryPath(repositoryPath: string) {
  core.saveState('repositoryPath', repositoryPath)
}

/**
 * Save the SSH key path so the POST action can retrieve the value.
 */
export function setSshKeyPath(sshKeyPath: string) {
  core.saveState('sshKeyPath', sshKeyPath)
}

/**
 * Save the SSH known hosts path so the POST action can retrieve the value.
 */
export function setSshKnownHostsPath(sshKnownHostsPath: string) {
  core.saveState('sshKnownHostsPath', sshKnownHostsPath)
}

/**
 * Save the set-safe-directory input so the POST action can retrieve the value.
 */
export function setSafeDirectory() {
  core.saveState('setSafeDirectory', 'true')
}

/**
 * Save the post-clean input so the POST action can retrieve the value.
 */
export function setPostClean(postClean: boolean) {
  core.saveState('postClean', postClean)
}

/**
 * Save the clean-ignore input so the POST action can retreive the value.
 */
export function setCleanExclude(ignored: string[]) {
  core.saveState('cleanExclude', JSON.stringify(ignored))
}

// Publish a variable so that when the POST action runs, it can determine it should run the cleanup logic.
// This is necessary since we don't have a separate entry point.
if (!IsPost) {
  core.saveState('isPost', 'true')
}
