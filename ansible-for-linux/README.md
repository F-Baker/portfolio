# ansible-for-linux

## description

This directory hosts __opinionated__ IaC examples on Linux using Ansible. These playbooks are written principally for Ubuntu on ARM processors like the RPI5 or the Mac M-series chip.  This playbooks are intended to be run from venv and will not run with out modifications to the hosts.yaml and sudo on the target server.  **This is not a tutorial.**

The objective in my writing is to provide simplified, specialized playbooks which address a single use case on a single target architecture.  In practicality, what this means is that autodetection, tagging, failure handling, env var args passed at execution, etc are all stripped out.  The result is a highly readable, maintainable playbook that is easy to debug and extend.

Be precise.  Be readable.  Be idempotent.

## playbooks

### init-microk8s-on-rpi

#### description

This playbook installs and configures a number of tools on an RPI 5 with Ubuntu Server 24.04.  This playbook is meant to create a lab environment where humans will regularly connect and fiddle with things.  QoL and security improvements are provided but not necessary to working with microk8s.

This playbook is composed of multiple examples.

Features:

- configure SSH to improve security
- install an opinionated tmux config
- configure .bashrc for traceability, aliases
- install docker
- install microk8s with multiple addons for QoL

**Be aware that this playbook disables swap.  Doing so on a host running baremetal app may result in regular app failures.**
